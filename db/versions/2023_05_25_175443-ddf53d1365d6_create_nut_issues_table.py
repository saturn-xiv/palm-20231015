"""create nut.issues table

Revision ID: ddf53d1365d6
Revises: a4954a45102a
Create Date: 2023-05-25 17:54:43.551292

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ddf53d1365d6'
down_revision = 'a4954a45102a'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'issues',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('question', sa.String(length=255), nullable=False),
        sa.Column('answer', sa.Text, nullable=False),
        sa.Column('answer_editor', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_issues_question', 'issues', ['question'])
    op.create_index('idx_issues_resource_type', 'issues', ['resource_type'])


def downgrade() -> None:
    op.drop_table('issues')
