"""create nut.leave-words table

Revision ID: 6115bfe24b9a
Revises: ce55e791a72e
Create Date: 2023-05-25 14:11:33.198275

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6115bfe24b9a'
down_revision = 'ce55e791a72e'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'leave_words',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('lang', sa.Integer, nullable=False),
        sa.Column('ip', sa.String(length=45), nullable=False),
        sa.Column('body', sa.Text, nullable=False),
        sa.Column('body_editor', sa.Integer, nullable=False),
        sa.Column('status', sa.Integer, nullable=False),
        sa.Column('published_at', sa.DateTime),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_leave_words_ip', 'leave_words', ['ip'])


def downgrade() -> None:
    op.drop_table('leave_words')
