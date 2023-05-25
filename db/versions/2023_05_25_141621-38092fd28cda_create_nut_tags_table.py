"""create nut.tags table

Revision ID: 38092fd28cda
Revises: 6115bfe24b9a
Create Date: 2023-05-25 14:16:21.596726

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '38092fd28cda'
down_revision = '6115bfe24b9a'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'tags',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('code', sa.String(length=63), nullable=False, unique=True),
        sa.Column('sort_order', sa.Integer,
                  nullable=False, server_default='100'),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )


def downgrade() -> None:
    op.drop_table('tags')
